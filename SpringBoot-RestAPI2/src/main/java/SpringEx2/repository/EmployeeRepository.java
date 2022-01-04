package SpringEx2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import SpringEx2.model.Employee;
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{//JpaR.. exposes many dml methods
	//it makes Employee has many database methods, such as delete, add, update and so on
	//seems like a database access class in jdbcTemplate, is it a dao layer?
	
	//next step is creating a restful web services.
	

}
