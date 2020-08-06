/*
Random Quote Generator - Generate and Download Random Quotes
Copyright (C) 2020  Keyur Patel

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
let quotes=[
    {'Anonymous': 'The best thing about a boolean is even if you are wrong, you are only off by a bit.'},
    {'Louis Srygley': 'Without requirements or design, programming is the art of adding bugs to an empty text file.'},
    {'Ralph Johnson': 'Before software can be reusable it first has to be usable.'},
    {'Anonymous': 'The best method for accelerating a computer is the one that boosts it by 9.8 m/s2.'},
    {'Oktal': 'I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing.'},
    {'Gerald Weinberg': 'If builders built buildings the way programmers wrote programs, then the first woodpecker that came along would destroy civilization.'},
    {'Alan J. Perlis': 'There are two ways to write error-free programs; only the third one works.'},
    {'Anonymous': 'Ready, fire, aim: the fast approach to software development. Ready, aim, aim, aim, aim: the slow approach to software development.'},
    {'Anonymous': 'It’s not a bug – it’s an undocumented feature.'},
    {'Jessica Gaston': 'One man’s crappy software is another man’s full-time job.'},
    {'Doug Linder': 'A good programmer is someone who always looks both ways before crossing a one-way street.'},
    {'Martin Golding': 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.'},
    {'Michael Sinz': 'Programming is like sex. One mistake and you have to support it for the rest of your life.'},
    {'Jeff Sickel': 'Deleted code is debugged code.'},
    {'Edward V Berard': 'Walking on water and developing software from a specification are easy if both are frozen.'},
    {'Edsger Dijkstra': 'If debugging is the process of removing software bugs, then programming must be the process of putting them in.'},
    {'Anonymous': 'Software undergoes beta testing shortly before it’s released. Beta is Latin for “still doesn’t work.'},
    {'Rick Cook': 'Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the universe trying to produce bigger and better idiots. So far, the universe is winning.'},
    {'Keith Braithwaite': 'It’s a curious thing about our industry: not only do we not learn from our mistakes, but we also don’t learn from our successes.'},
    {'Bjarne Stroustrup': 'There are only two kinds of programming languages: those people always bitch about and those nobody uses.'},
    {'Anonymous': 'In order to understand recursion, one must first understand recursion.'},
    {'Gordon Bell': 'The cheapest, fastest, and most reliable components are those that aren’t there.'},
    {'J. Osterhout': 'The best performance improvement is the transition from the nonworking state to the working state.'},
    {'Seymour Cray': 'The trouble with programmers is that you can never tell what a programmer is doing until it’s too late.'},
    {'Mosher’s Law of Software Engineering': 'Don’t worry if it doesn’t work right. If everything did, you’d be out of a job.'},
];

function displayQuote(){
    //create an index of a random number 
    //convert it into between 0 to length of quotes[]
    let index = Math.floor(Math.random()*quotes.length);
    let list = quotes[index];
    //display the quote and author of that index
    for (var key in list){
        let div=document.querySelector('#quote');
        let quote=`<div class="card">
        <img src="assets/icon.svg" style="transform: rotate(180deg); -webkit-transform: scaleY(-1); transform: scaleY(-1);">
        <p>${list[key]}</p>
        <p>-${key}</p>
        <img src="assets/icon.svg" style="-webkit-transform: scaleX(-1); transform: scaleX(-1);">
        </div>`;
        div.innerHTML=quote;

        //Dispose the displayed quote and buttons
        this.disposeQuote = function(){
            let div=document.querySelector('#quote');
            let quote=``;
            div.innerHTML=quote;
            let btn = document.querySelector('#btn');
            let button = `<button style="margin:0px;" onclick="displayQuote();">Generate</button>`
            btn.innerHTML = button;
        }

        //Download displayed quote
        this.downloadQuote = function(){
            download(list[key] + "\n\n-by " + key, "quote.txt");
        }
    }
    //Display buttons(Download and Dispose)
    let div = document.querySelector('#btn');
    let button = `<button style="margin:0px;" onclick="displayQuote();">Generate</button>
    <button style="margin:10px;" onclick="disposeQuote();">Dispose</button>
    <button style="margin:0px;" onclick="downloadQuote();">Download</button>`
    div.innerHTML = button;
}

function download(text, filename){
    var blob = new Blob([text], {type: "text/plain"});
    var url = window.URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
}