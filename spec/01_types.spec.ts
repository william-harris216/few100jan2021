describe('varaibles and types in typescript', () => {
    it('untyped variables', () => {
        let x;

        x = 12;
        expect(x).toBe(12);
        x = "Book";
        expect(x).toBe('Book');
    });

    it('typed variables', () => {
        let x: number | string;  //union type.

        x = 12;
        expect(x).toBe(12);
        x = 'Books';
        expect(x).toBe('Books');
    });

    it('initializing with let', () => {
        let x: number | string = 12; // initializing - give is a value when you declare it
        let y = 'will';

        x = 'bill';
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

        it('what', () => {
            
        });


    describe('literals in typescript', () => {
        
        describe('what', () => {
        
        
        });
        
        });
});