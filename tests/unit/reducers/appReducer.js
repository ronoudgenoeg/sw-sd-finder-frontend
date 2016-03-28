import reducer from '../../../src/reducers/appReducer';

describe('appReducer', () => {

  describe('an action that the appReducer doesnt care about is sent', () => {

    it('returns the default state', () => {
      expect(reducer({}, {
        type: 'SOMETHING_IT_DOESNT_CARE_ABOUT'
      })).to.deep.equal({
        config: {},
        region: {}
      })
    });
  });

  describe('sends the START_FETCHING_REGIONS action', () => {

    it('returns the default state updated with isWorking true and error false', () => {
      expect(reducer({}, {
        type: 'START_FETCHING_REGIONS'
      })).to.deep.equal({
        config: {},
        region: {
          isWorking: true,
          error: false
        }
      })
    });
  });

  describe('sends the FAIL_FETCHING_REGIONS action', () => {

    it('returns the current state updated with isWorking false and error true', () => {
      expect(reducer({
        region: {
          isWorking: true
        }
      }, {
        type: 'FAIL_FETCHING_REGIONS'
      })).to.deep.equal({
        config: {},
        region: {
          isWorking: false,
          error: true
        }
      })
    });
  });

  describe('sends the SUCCESS_FETCHING_REGIONS action', () => {

    it('returns the current state with the regions add', () => {
      expect(reducer({
        region: {
          isWorking: true
        }
      }, {
        type: 'SUCCESS_FETCHING_REGIONS',
        payload: [
          {
            id: 1,
            name: 'Global'
          },
          {
            id: 2,
            name: 'Europe'
          }
        ]
      })).to.deep.equal({
        config: {},
        region: {
          isWorking: false,
          error: false,
          regions: [
            {
              id: 1,
              name: 'Global'
            },
            {
              id: 2,
              name: 'Europe'
            }
          ]
        }
      })
    });
  });


});
