package people;
public abstract class Persona {
    private final String name;
    private final String lastName;
    private final int age;


    public Persona(String name, String lastName, int age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }


    public String getName() {
        return this.name;
    }


    public String getLastName() {
        return this.lastName;
    }


    public int getAge() {
        return this.age;
    }

    public abstract void entrevista();
}