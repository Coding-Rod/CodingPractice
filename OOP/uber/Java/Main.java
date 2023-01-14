class Main{
    public static void main(String[] args) {
        System.out.println("Hola Mundo");
        Car car = new Car();
        car.license = "AMQ123";
        car.driver = "Andres Herrera";
        car.passenger = 4;
        System.out.println("Car license: "+car.license);
    }
}