import React from 'react';
// import PropTypes from 'prop-types';
import Item from 'containers/Item/Item';
import ProjectGridItem from 'components/ProjectGridItem/ProjectGridItem';
import style from 'components/ProjectGrid/ProjectGrid.style';

const ProjectGrid = ({ projects }) => (
  <section style={style.container}>
    <ul style={style.wrapper}>
      {
        projects.map((id) => (
          <Item
            key={id}
            element={ProjectGridItem}
            itemId={id}
          />
        ))
      }
    </ul>
  </section>
);

// SiteHeader.propTypes = {
//   fields: PropTypes.shape({
//     sitetitle: PropTypes.shape({
//       'en-GB': PropTypes.string,
//     }),
//     description: PropTypes.shape({
//       'en-GB': PropTypes.string,
//     }),
//     image: PropTypes.shape({
//       'en-GB': PropTypes.shape({
//         sys: PropTypes.shape({
//           id: PropTypes.string,
//         }),
//       }),
//     }),
//   }).isRequired,
// };

export default ProjectGrid;
