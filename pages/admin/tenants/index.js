import React from 'react';
import PaginatedContent from '@/components/admin/PaginatedContent';
import { Card } from 'react-bootstrap';
import Backend from '@/components/admin/Backend';
import { adminMenu } from '@/data/adminMenu';

const Tenants = () => (
  <Backend>
    <PaginatedContent
      endpoint={'api/tenants'}
      pageName="Tenant"
      DataComponent={TenantsRowList}
      PageIcon={adminMenu['Tenants']}
    />
  </Backend>
);

const TenantsRowList = ({ results, offset }) => {
  return (
    <div className="container-fluid">
      <Card className="mt-2">
        <div className="table-responsive">
          <table className="table table-border table-hover">
            <thead>
              <tr>
                <th>S/N</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {results.map(({ id, attributes }, index) => (
                <TenantsSingleRow
                  key={index}
                  number={offset + index + 1}
                  id={id}
                  {...attributes}
                />
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

const TenantsSingleRow = ({ number, name, type }) => {
  return (
    <tr>
      <td>{number}</td>
      <td>
        {name} - {type}
      </td>
    </tr>
  );
};

export default Tenants;