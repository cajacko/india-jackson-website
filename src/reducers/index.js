import { combineReducers } from 'redux';
import items from 'reducers/items';
import assets from 'reducers/assets';
import routes from 'reducers/routes';
import routeData from 'reducers/routeData';
import fourOhFour from 'reducers/fourOhFour';
import loading from 'reducers/loading';

export default combineReducers({
  items,
  routes,
  routeData,
  fourOhFour,
  loading,
  assets,
});