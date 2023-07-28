public class Main {
    public static void main(String[] args) throws Exception {
        Class1 obj1 = new Class1();

        obj1.setAge(21);
        System.out.println("La edad es: "+obj1.getAge());
        
        obj1.setName("Rodrigo");
        System.out.println("El nombre es: "+obj1.getName());
    }
}
