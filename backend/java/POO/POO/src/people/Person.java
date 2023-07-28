package people;
public class Person {
    String name;
    int age;

    public Person(String name, int age) {
        this.name = name; //This is used for atributes
        this.age = age;
    }
    
    public void showData() {
        System.out.println("El nombre es: " + name);
        System.out.println("La edad es: " + age);
    }
}