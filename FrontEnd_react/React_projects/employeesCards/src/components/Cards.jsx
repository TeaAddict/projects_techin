import Badge from "react-bootstrap/Badge";
import { default as employees } from "./../data/data.json";

function Cards() {
  //cards array
  let cards = employees.map((employee) => {
    //tools array
    let tools = employee.tools.map((tool, index) => {
      return <Badge key={index}>{tool}</Badge>;
    });

    return (
      <div className="card d-flex flex-row" key={employee.id}>
        <div className="company-logo p-3">
          <img src={employee.logo} alt="Company Logo" />
        </div>
        <div className="employee-info d-flex flex-column justify-content-center">
          <div className="d-flex gap-2">
            <span>{employee.company}</span>
            {employee.new && (
              <Badge pill bg="info">
                NEW!
              </Badge>
            )}
            {employee.featured && (
              <Badge pill bg="dark">
                FEATURED
              </Badge>
            )}
          </div>
          <div className="fw-bold">{employee.position}</div>
          <div className="d-flex gap-4 info">
            <span>{employee.postedAt}</span>
            <span>{employee.contract}</span>
            <span>{employee.location}</span>
          </div>
        </div>
        <div className="d-flex align-items-center">{tools}</div>
      </div>
    );
  });

  //cards array display to page
  return <div className="cards">{cards}</div>;
}

export default Cards;
