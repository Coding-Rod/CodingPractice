package mathematics;
public class Coche {
    String color;
    String manufacturer;
    int distance;

    public static void main(String[] args) {
        Coche coche1 = new Coche();
        coche1.color = "White";
        coche1.manufacturer = "Audi";
        coche1.distance = 0;

        System.out.println("Car 1 color: "+coche1.color);
        System.out.println("Car 1 manufacturer: "+coche1.manufacturer);
        System.out.println("Car 1 distance: "+coche1.distance);
    }
}
