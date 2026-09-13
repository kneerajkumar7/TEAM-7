//Filter a list of employee objects by age and salary criteria using java 8 streams

import java.util.*;
import java.util.stream.*;

class Employee {

    int id;
    String name;
    int age;
    double salary;

    Employee(int id, String name, int age, double salary) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    @Override
    public String toString() {
        return id + " " + name + " " + age + " " + salary;
    }
}

public class FilteList {

    public static void main(String[] args) {

        List<Employee> employees = Arrays.asList(
            new Employee(1, "Niranjan", 22, 45000),
            new Employee(2, "Ganesh", 28, 60000),
            new Employee(3, "deva", 30, 75000),
            new Employee(4, "Arun", 24, 55000),
            new Employee(5, "Kiran", 35, 90000)
        );

        List<Employee> res = employees.stream()
                .filter(E -> E.age > 25)
                .filter(E -> E.salary > 50000)
                .collect(Collectors.toList());

        System.out.println("Employees matching list:");

        res.forEach(System.out::println);
    }
}

