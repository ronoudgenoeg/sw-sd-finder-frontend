import reducer from '../../../src/reducers/appReducer';
import {assocPath, pipe} from 'ramda';

const defaultState = {
  config: {},
  dungeon: {},
  region: {},
  openDungeon: {}
}

describe('appReducer', () => {

  describe('an action that the appReducer doesnt care about is sent', () => {

    it('returns the default state', () => {
      expect(reducer({}, {
        type: 'SOMETHING_IT_DOESNT_CARE_ABOUT'
      })).to.deep.equal(defaultState)
    });
  });

  describe('sends the START_FETCHING_REGIONS action', () => {

    it('returns the default state updated with isWorking true and error false', () => {
      expect(reducer({}, {
        type: 'START_FETCHING_REGIONS'
      })).to.deep.equal(pipe(
        assocPath(['region', 'isWorking'], true),
        assocPath(['region', 'error'], false)
      )(defaultState))
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
      })).to.deep.equal(pipe(
        assocPath(['region', 'isWorking'], false),
        assocPath(['region', 'error'], true)
      )(defaultState))
    });
  });

  describe('sends the SUCCESS_FETCHING_REGIONS action', () => {

    it('returns the current state with the regions added', () => {
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
      })).to.deep.equal(pipe(
        assocPath(['region', 'isWorking'], false),
        assocPath(['region', 'error'], false),
        assocPath(['region', 'values'], [
          {
            id: 1,
            name: 'Global'
          },
          {
            id: 2,
            name: 'Europe'
          }
        ])
      )(defaultState))
    });
  });

  describe('sends the SUCCESS_FETCHING_OPEN_DUNGEONS action', () => {

    it('returns the current state with the open dungeons added', () => {
      expect(reducer({
        openDungeon: {
          isWorking: true
        }
      }, {
        type: 'SUCCESS_FETCHING_OPEN_DUNGEONS',
        payload: [{dungeon_id: '1', time_remaining: '154', region_id: '1'}]
      })).to.deep.equal(pipe(
        assocPath(['openDungeon', 'isWorking'], false),
        assocPath(['openDungeon', 'error'], false),
        assocPath(['openDungeon', 'values'], [{dungeon_id: '1', time_remaining: '154', region_id: '1'}])
      )(defaultState))
    });
  });


});
