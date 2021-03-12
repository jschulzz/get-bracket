![npm](https://img.shields.io/npm/v/get-bracket)

# get-bracket

Gets the latest ESPN bracketology into a JSON format. By default this scrapes the Men's Bracketology, but there are options to instead grab the Women's Bracketology.

## Output

The output JSON of this is pretty clear. Below is an example snippet.

Teams are sorted in the order they would appear on a bracket, with their immediate opponent directly before or after them. Regions are similarly sorted, i.e. Regions 1 and 4 play each other in the Final Four, and the regions are ordered as 1, 4, 2, 3. In the case of a play-in game, the teams are further separated.

In 2021, The Women's Regions are named (Alamo Region, Hemisfair, Mercado, and River Walk Regions), but these are still sorted in the order they would compete. 

```js
 {
    regions: [
        {
            name: 'Region 1',
            teams: [
                { seed: 1, team: 'Gonzaga', playIn: false },
                {
                playInTeams: [ "St. Peter's", 'N.C. A&T' ],
                seed: 16,
                playIn: true
                },
                { seed: 8, team: 'LSU', playIn: false },
                { seed: 9, team: 'St. Bonaventure', playIn: false },
                { seed: 5, team: 'Florida St.', playIn: false },
                ...
```

## Usage

This package can be used as both a CLI tool and a Node library

### CLI

The usage here is pretty straightforward. There is a `-w` flag that can be used to scrape the Women's Bracketology.

```bash
# this will print the Women's bracket to the terminal
npx get-bracket -w

# this will write the Men's bracket to a bracketology.json file
npx get-bracket > bracketology.json
```

### Node

This can be imported and used like any other package. There is an option argument that can be passed in to specify the Women's bracketology. By default, the Men's bracketology will be grabbed

**Note:** The main `getBracket` function is asynchronous

```javascript
import getBracket from "get-bracket";

// grabs the Women's bracketology
const bracketology = await getBracket({ women: true });
```
