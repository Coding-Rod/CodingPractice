public class Rectangulo extends Poligono{
    private double lado1;
    private double lado2;

    public Rectangulo(double lado1, double lado2) {
        super(2);
        this.lado1 = lado1;
        this.lado2 = lado2;
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



    @Override
    public String toString() {
        return "Lados totales= "+ super.toString()+
               "\nlado1=" + getLado1()+
               "\nlado2=" + getLado2();
    }


    @Override
    public double area() {
        return this.lado1 * this.lado2;
    }
}
