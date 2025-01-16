import React, { FC } from 'react'

interface PaginationItemProps {
    paginationItems: {
        id: number,
        title: string
    }[] 
}

const PaginationItem: FC<PaginationItemProps> = ({paginationItems}) => {

  return (
    <ul className='features-pagination'>
        {/* {paginationItems.map((el) => 
            <li 
                key={el.id} 
                className={featuresTitleId === el.id ? 'pagination-item active' : 'pagination-item'}
                onClick={() => setfeaturesTitleId(el.id)}
            >
                {el.title}
            </li>
        )} */}
        
    </ul>
  )
}

export default PaginationItem