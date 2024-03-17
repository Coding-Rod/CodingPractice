public class Person {
    private final String name;
    private final String lastname;
    private final int age;


    public Person(String name, String lastname, int age) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
    }


    public String getName() {
        return this.name;
    }


    public String getLastname() {
        return this.lastname;
    }


    public int getAge() {
        return this.age;
    }

}
