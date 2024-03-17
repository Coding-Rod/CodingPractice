package people;
public class Person1 {
    String name;
    int age;
    String dni;

    public Person1(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public Person1(String dni) {
        this.dni = dni;
    }

    public void correr() {
        System.out.println("Name= "+name+" age="+age+" is running a marathon...");
    }

    public void correr(int km) {
        System.out.println("I have run "+km+" kilometers");
    }
}