import people.*;

public class Main {
    public static void main(String[] args) {
        Person person = new Person("Rodrigo", 21);

        person.showData();

        Person1 person1 = new Person1("Rodrigo", 22);
        Person1 person2 = new Person1("6765613");

        person1.correr();

        person1.correr(10);
        person2.correr();
    }
}
