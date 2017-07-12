import { WHITE, GREY_LIGHT, GREY_LIGHT_HIGHLIGHT } from 'constants/colours';

export default {
  container: {
    backgroundColor: WHITE,
  },

  wrapper: {
    maxWidth: 800,
    margin: '0 auto',
    display: 'flex',
    padding: '50px 10px',
  },

  image: {
    flex: 1,
  },

  textWrapper: {
    flex: 2,
    paddingLeft: 40,
  },

  paragraph: {
    fontSize: 20,
    margin: 0,
  },

  link: {
    marginTop: 20,
    display: 'inline-block',
    padding: '10px 20px',
    background: GREY_LIGHT,
    borderColor: GREY_LIGHT_HIGHLIGHT,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
  },
};
