//Package weather nome do pacote.
package weather

//CurrentCondition variável do tipo string.
var CurrentCondition string

//CurrentLocation variável do tipo string.
var CurrentLocation string

//Forecast função.
func Forecast(city, condition string) string {
	CurrentLocation, CurrentCondition = city, condition
	return CurrentLocation + " - current weather condition: " + CurrentCondition
}
