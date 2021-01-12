import { Message } from "../src/message";
import { PI } from './utils';

describe('variables and types in TypeScript', () => {
    it('untyped variables', () => {
        let x;

        x = 12;
        expect(x).toBe(12);
        x = 'tacos';
        expect(x).toBe('tacos');

    });
    it('typed variables', () => {
        let x: number | string; // union type.

        x = 12;

        expect(x).toBe(12);
        x = 'tacos';


        // x = { name: 'bob'}
    });
    it('initializing with let', () => {
        let x: number | string = 12; // initializing.
        let y = 'Gene';

        x = 'Bird';
        // y = 12;
    });
    describe('constants', () => {

        it('declaring them', () => {
            const PI = 3.1415;
        });
        it('does not change underlying type', () => {
            const friends = ['Sean', 'Amy', 'David', 'Sarah']; // this is an array literal
            // friends = [];
            friends[0] = 'Billy';
            expect(friends).toEqual(['Billy', 'Amy', 'David', 'Sarah']);

            const ep4 = { title: 'A New Hope', yearReleased: 1978 }; // object literal
            // ep4 = {};
            ep4.yearReleased = 1977;
            expect(ep4).toEqual({ title: 'A New Hope', yearReleased: 1977 });
        });
    });

    it('what is so wrong with the var keyword anyhow', () => {
        const age = 22;
        // This is a counter-example. Don't do this. Use let binding instead.
        if (age >= 21) {
            var message = 'Old Enough';
        } else {
            var message = 'Too Young';
        }

        expect(message).toBe('Old Enough');
    });
    it('the correct way to implement the above - take 1', () => {
        const age = 22;

        let message: string;
        if (age >= 21) {
            message = 'Old Enough';
        } else {
            message = 'Too Young';
        }

        expect(message).toBe('Old Enough');
    });
    it('the correct way to implement this above - take 2', () => {
        const age = 21;

        const message = age >= 21 ? 'Old Enough' : 'Too Young'; // ternary operator.

        expect(message).toBe('Old Enough');
    });

    describe('literals in typescript', () => {

        describe('it has numbers', () => {


            it('some examples', () => {
                let sample: number;

                sample = 10;
                sample = 3.1415;
                sample = 0xff; // base 16 - Hexadecimal
                sample = 0o22; // base 8 - Octal
                sample = 0b101010; // binary, base 2
                sample = 123_654_478_912;
                expect(sample).toBe(123654478912);

                sample = parseFloat('133.23');
                expect(sample).toBe(133.23);

                sample = parseInt('133.23');
                expect(sample).toBe(133);
            });
        });

        describe('string literals', () => {
            it('delimiting strings', () => {
                const myName = "Jeff";
                expect(myName).toBe('Jeff');

                const name = 'Flannery O\'Conner';
                const dialog = "He said \"How's it going?\" to a stunned audience";
            });
            it('template strings', () => {
                const s1 = `This is a String`;

                const story = `Chapter 1.
                
                It was a dark and stormy night.
                
                
                The End`;

                const name = 'Bob';
                const job = 'DEV';

                const info1 = 'The name is ' + name + ' and the job is ' + job;
                const info2 = `The name is ${name} and the job is ${job}`;
                expect(info1).toBe(info2);

            });

        });
        describe('array literals', () => {

            it('has them', () => {
                const stuff = []; // this is an empty 'any' array;
                stuff[0] = 'Birds';
                expect(stuff[0]).toBe('Birds');
                expect(stuff).toEqual(['Birds']);

                stuff[1] = 3.1415;
                stuff[2] = stuff;

            });
            it('declaring typed arrays', () => {
                const stuff: string[] = [];
                stuff[0] = 'Birds';
                // stuff[1] = 3.14;
                const luckyNumbers: number[] = [2, 9, 20, 108, 42];

                const both: (string | number)[] = [1, 2, 3, 'birds'];

                const animal = both[3];

                const both2: Array<string | number> = [1, 2, 'cats'];

                const friends: Array<string> = [];
                const friends2: string[] = [];

                const x = both2[1];



            });
            it('type aliases', () => {
                type ThingWithLettersAndStuff = string;

                const myName: ThingWithLettersAndStuff = 'Jeff';

                type MorseCode = 'dot' | 'dash';

                const someDot: MorseCode = 'dot';

                const message: MorseCode[] = ['dot', 'dot', 'dot', 'dash', 'dash', 'dash', 'dot', 'dot', 'dot'];

                enum SeatType { Window, Aisle, Middle };

                const mySeat: SeatType = SeatType.Window;


            });
        });
    });
    describe('tuple types', () => {
        it('basic syntax', () => {
            type Musician = [string, string, number, string];

            const warren: Musician = ['Warren', 'Ellis', 58, 'Guitar'];

            const age = warren[2];
            expect(typeof (age)).toBe("number");


            const instrument = warren[3];

            expect(typeof (instrument)).toBe("string");

        });
        describe('an example', () => {

            it('first an OOP would do it this way', () => {

                // names are formatted as last, first
                // string FormatName(string first, string last) { .. }
                function formatName(first: string, last: string): { fullName: string, numberOfLetters: number } {
                    const name = `${last}, ${first}`;
                    return {
                        fullName: name,
                        numberOfLetters: name.length
                    }
                }

                // expect(formatName('Han', 'Solo')).toBe('Solo, Han');
                const result = formatName('Han', 'Solo');
                expect(result.fullName).toBe('Solo, Han');
                expect(result.numberOfLetters).toBe(9);

            });
            it('Here is how you might do it with a tuple type', () => {

                function formatName(first: string, last: string): [string, number] {
                    const name = `${last}, ${first}`;
                    return [name, name.length];
                }

                const result = formatName('Han', 'Solo');
                expect(result[0]).toBe('Solo, Han');
                expect(result[1]).toBe(9);
            });
        });

    });
    describe('destructuring', () => {

        it('has object destructuring', () => {
            const dataFromApi = { name: 'Bob Smith', phone: '555-1212', age: 52, eyeColor: 'blue' };


            // const name = dataFromApi.name;
            // const phoneNumber = dataFromApi.phone;
            const { name, phone: phoneNumber } = dataFromApi;


            expect(name).toBe('Bob Smith');
            expect(phoneNumber).toBe('555-1212');
        });

        it('has array destructuring', () => {
            type Musician = [string, string, number, string];

            const warren: Musician = ['Warren', 'Ellis', 58, 'Guitar'];
            const nick: Musician = ['Nick', 'Cave', 63, 'Singer'];

            // const lastName = warren[1];
            // const age = warren[2];
            //    [0,1       , 2  , 3]
            const [, lastName, age] = warren;

            expect(lastName).toBe('Ellis');
            expect(age).toBe(58);

            function logInformation(who: Musician): void {
                const [firstName, , , instrument] = who;
                console.log(`${firstName} plays ${instrument}`);
            }

            logInformation(warren);
            logInformation(nick);
        });
    });

    describe('object literals', () => {
        it('a few details', () => {

            interface Song {
                title: string;
                artist: string;
                lastPlayed: string;
                numberOfSecondsLong: number;
                yearReleased?: number;
            };

            const song: Song = {
                title: 'Renegades of Funk',
                artist: 'Rage Against the Machine',
                lastPlayed: 'This morning',
                numberOfSecondsLong: 333
            }

            const song2: Song = {
                title: 'This Magic Moment',
                artist: 'Lou Reed',
                lastPlayed: 'This morning',
                numberOfSecondsLong: 128,
                yearReleased: 1998
            }

            expect(song.lastPlayed).toBe('This morning'); // Dot notation (.)
            expect(song['lastPlayed']).toBe('This morning'); // "Indexer notation"

            song.numberOfSecondsLong = 335;
            doSomethingWithASong(song);
            doSomethingWithASong(song2);
            function doSomethingWithASong(s: Song): void {

            }


        });

        it('duck typing - aka structural typing', () => {

            function logInfo(message: Message) {
                console.log(`Logging: ${message.from}: message: ${message.message}`);
            }

            const phoneCall: Message = { from: 'Mom', message: 'Call me back!' }
            logInfo(phoneCall);

            // const email = { from: 'Joe', subject: 'Lunch', msg: 'Cancelled!' }
            // logInfo(email);
            interface TimeOffRequest { employeeId: Number, startDate: String, endDate: String }
            function assignTimeOff(who: TimeOffRequest) {
                // who.employeeId,
                // who.startDate,
                // who.endDate
            }
            assignTimeOff({ employeeId: 99, startDate: 'tomorrow', endDate: 'next thursday' });
        });

    });

    describe('function literals', () => {

        it('has three ways to create them', () => {

            expect(add(10, 2)).toBe(12);


            // named function
            function add(a: number, b: number): number {
                return a + b;
            }

            // anonymous functions 

            // old skool
            const subtract = function (a: number, b: number): number {
                return a - b;
            }
            // cool kid way
            const multiply = (a: number, b: number): number => a * b;
            const divide = (a: number, b: number): number => {
                if (b === 0) {
                    throw 'Are you trying to open a black hole?!?! - divide by zero';

                } else {
                    return a / b;
                }
            };

            expect(subtract(10, 2)).toBe(8);
            expect(multiply(10, 2)).toBe(20);
            expect(divide(10, 2)).toBe(5);
        });
    });
});