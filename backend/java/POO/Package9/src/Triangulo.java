public class Triangulo extends Poligono {
    private double lado1;
    private double lado2;
    private double lado3;

    public Triangulo(double lado1, double lado2, double lado3) {
        super(3);
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }

    public double getLado1() {
        return this.lado1;
    }

    public void setLado1(double lado1) {
        this.lado1 = lado1;
    }

    public double getLado2() {
        return this.lado2;
    }

    public void setLado2(double lado2) {
        this.lado2 = lado2;
    }

    public double getLado3() {
        return this.lado3;
    }

    public void setLado3(double lado3) {
        this.lado3 = lado3;
    }

    @Override
    public String toString() {
        return "Lados del triangulo=  " + super.toString()+
            "\nlado1= " + getLado1() + 
            "\nlado2= " + getLado2() + 
            "\nlado3= " + getLado3();
    }


    @Override
    public double area() {
        double p = (this.lado1+this.lado2+this.lado3)/2;
        return Math.sqrt(p*(p-this.lado1)*(p-this.lado2)*(p-this.lado3));
    }

}
