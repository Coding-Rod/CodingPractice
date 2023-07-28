package people.medicina;
import people.Persona;
public class Doctor extends Persona{
    private int titulacion;
    private int experiencia;  
    
    public Doctor(String name, String lastName, int age, int titulacion, int experiencia){
        super(name, lastName, age);
        this.titulacion = titulacion;
        this.experiencia = experiencia;
    }

    public void curar(String name, int dorsal) {
        System.out.println("El doctor esta curando al jugador "+name+" con el dorsal "+dorsal);
    }

    @Override
    public void entrevista() {
        System.out.println("Se esta entrevistando al doctor "+super.getName()+" conforme al estado de los jugadores del equipo, es doctor es una persona muy calificada, se titulo el año "+this.titulacion+" y tiene "+this.experiencia+" años de experiencia trabajando con el equipo");
    }
}
