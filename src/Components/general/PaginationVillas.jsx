import React from 'react'

import { Pagination } from 'react-bootstrap';
const PaginationVillas = () => {
  return (


    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>

      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}




export default PaginationVillas