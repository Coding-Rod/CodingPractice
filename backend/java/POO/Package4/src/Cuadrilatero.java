public class Cuadrilatero {
    private float lado1;
    private float lado2;
    

    public Cuadrilatero(float lado1, float lado2) {
        this.lado1 = lado1;
        this.lado2 = lado2;
    }
    
    
    public Cuadrilatero(float lado1) {
        this.lado1 = this.lado2 =lado1;
    }

    public float getPerimeter() {
        return 2*(lado1 + lado2);
    }
    
    public float getArea() {
        return lado1 * lado2;
    }
}