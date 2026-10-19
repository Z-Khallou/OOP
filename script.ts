export { };
// Vi skapar huvudklassen Person som fungerar som en grundmall (basklass).
class Person {

    // Vi deklarerar klassens egenskaper och anger att de ska innehålla text (string).
    // Varför? För att TypeScript ska veta exakt vilken datatyp som förväntas och förhindra fel.
    namn: string;
    adress: string;
    telefonnummer: string;

    // Konstruktorn är en specialmetod som körs automatiskt när vi skapar ett nytt objekt (med 'new').
    // Varför? Den behövs för att ta emot de startvärden vi vill ge vår nya person.
    constructor(namn: string, adress: string, telefonnummer: string) {

        // 'this' pekar på det specifika objektet som vi precis håller på att bygga.
        // Varför? Vi måste skilja på parametern 'namn' som kommer in utifrån, 
        // och egenskapen 'namn' som tillhör själva objektet.
        this.namn = namn;
        this.adress = adress;
        this.telefonnummer = telefonnummer;
    }

    // En metod för att skriva ut personens information. 
    // ': void' betyder att funktionen bara utför en handling (utskrift) och inte skickar tillbaka (returnerar) någon data.
    skrivUt(): void {

        // console.log skriver ut texten i terminalen/konsolen.
        // Varför? Vi använder backticks (`) och ${} för att smidigt baka in variablernas värden mitt i texten (template literals).
        console.log(`Jag heter ${this.namn}, min adress är ${this.adress} och mitt telefonnummer är ${this.telefonnummer}.`);
    }
}

// 'extends' betyder att klassen Student ärver all kod (egenskaper och metoder) från klassen Person.
// Varför? Så att vi slipper skriva om koden för namn, adress och telefonnummer igen.
class Student extends Person {

    // Vi lägger till de unika egenskaper som bara en student har.
    klass: string;
    program: string;

    // Studentens konstruktor måste ta emot alla fem värden när en ny student skapas.
    constructor(namn: string, adress: string, telefonnummer: string, klass: string, program: string) {

        // 'super()' anropar förälderklassens (Person) konstruktor och skickar upp de tre grundvärdena.
        // Varför? Eftersom Person-klassen redan har kod för att hantera namn, adress och telefonnummer, låter vi den sköta det jobbet.
        super(namn, adress, telefonnummer);

        // Sedan sparar vi de unika student-egenskaperna direkt i det här objektet.
        this.klass = klass;
        this.program = program;
    }
}

// Lärare ärver också från Person, precis som Student gjorde.
class Lärare extends Person {

    // Unika egenskaper för just en lärare.
    ämne: string;
    kurs: string;

    // Konstruktorn tar emot alla fem nödvändiga värden.
    constructor(namn: string, adress: string, telefonnummer: string, ämne: string, kurs: string) {

        // Skickar upp de allmänna person-uppgifterna till Person-klassens konstruktor.
        super(namn, adress, telefonnummer);

        // Sparar de specifika lärar-uppgifterna.
        this.ämne = ämne;
        this.kurs = kurs;
    }
}

// Nu lämnar vi klass-mallarna och börjar köra själva programmet.
// 'new' säger åt programmet att bygga ett faktiskt objekt i datorns minne utifrån mallen 'Lärare'.
let nyLarare = new Lärare("Anna Andersson", "Storgatan 1", "0701112233", "Programmering", "Programmering 1");

// Vi anropar metoden 'skrivUt()'. Eftersom Lärare har ärvt den från Person, finns den tillgänglig att använda.
nyLarare.skrivUt();

// Vi gör samma sak för att skapa ett faktiskt objekt utifrån mallen 'Student'.
let nyStudent = new Student("Klara Johansson", "Storgatan 10", "070123456", "Årskurs 4", "Matte");

// Skriver ut studentens information på samma sätt.
nyStudent.skrivUt();
