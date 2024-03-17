public class Athlete {
    private final int number;
    private String name;
    private float time;
    

    public Athlete(int number, String name, float time) {
        this.number = number;
        this.name = name;
        this.time = time;
    }


    public int getNumber() {
        return this.number;
    }


    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public float getTime() {
        return this.time;
    }

    public void setTime(float time) {
        this.time = time;
    }

}
