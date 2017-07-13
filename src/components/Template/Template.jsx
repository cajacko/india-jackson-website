import React from 'react';
import PropTypes from 'prop-types';
import Item from 'containers/Item/Item';
import FourOhFourDefault from 'components/FourOhFourDefault/FourOhFourDefault';
import FullScreenLoading from 'components/FullScreenLoading/FullScreenLoading';

const Template = ({ noItem, components, loading, templateDataItem }) => {
  if (noItem) {
    if (loading) {
      return <FullScreenLoading />;
    }

    // eslint-disable-next-line
    console.warn('Hardcoded 404, should never happen with server rendering');
    return <FourOhFourDefault />;
  }

  if (!components) {
    return null;
  }

  let i = 0;

  return (
    <div>
      {
        components.map((id) => {
          i += 0;

          const key = `${i}-${id}`;

          return (
            <Item
              key={key}
              itemId={id}
              templateDataItem={templateDataItem}
            />
          );
        })
      }
    </div>
  );
};

Template.propTypes = {
  noItem: PropTypes.bool,
  loading: PropTypes.bool,
  templateDataItem: PropTypes.string,
  components: PropTypes.arrayOf(PropTypes.string),
};

Template.defaultProps = {
  noItem: false,
  fields: null,
  loading: false,
  templateDataItem: null,
  components: null,
};


export default Template;
