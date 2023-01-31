public class Lasagna {

    private static final int PREPARATION_MINUTES_PER_LAYER = 2;
    private static final int EXPECTED_MINUTES_IN_OVEN = 40;

    public int expectedMinutesInOven() {
        return EXPECTED_MINUTES_IN_OVEN;
    }

    public int remainingMinutesInOven(int actualMinutes) {
        return expectedMinutesInOven() - actualMinutes;
    }

    public int preparationTimeInMinutes(int layers) {
        return layers * PREPARATION_MINUTES_PER_LAYER;
    }

    public int totalTimeInMinutes(int layers, int minutes) {
        return preparationTimeInMinutes(layers) + minutes;
    }
}
