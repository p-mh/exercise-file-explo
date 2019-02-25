import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ location: { pathname } }) => {
  const breadcrumbLinks = pathname.split('/');
  const [firstElem, ...restElem] = breadcrumbLinks;
  const breadcrumbArray = ['Home', ...restElem];

  const breadcrumb = breadcrumbArray.map((page, index) => {
    const linkPath = breadcrumbLinks.slice(0, index + 1).join('/');
    return (
      <span key={index}>
        {index === 0 ? '' : ' > '}
        <Link to={`${linkPath}`}>{page}</Link>
      </span>
    );
  });

  return <div>{breadcrumb}</div>;
};

export default Breadcrumb;
