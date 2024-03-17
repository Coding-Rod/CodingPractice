public abstract class Poligono {
    protected int numeroLados;


    public Poligono(int numeroLados) {
        this.numeroLados = numeroLados;
    }


    public int getNumeroLados() {
        return this.numeroLados;
    }

    @Override
    public String toString() {
        return "Numero de lados: "+numeroLados;
    }

    public abstract double area();
}
