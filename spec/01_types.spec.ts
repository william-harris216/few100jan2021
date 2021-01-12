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

                const both2: Array<string | number> = [1, 2, 'cats'];

                const x = both2[1];



            });
        });
    });

});