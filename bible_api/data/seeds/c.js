const Acts = require('../../KJV/Acts')
const Amos = require('../../KJV/Amos')
const Colossians = require('../../KJV/Colossians')
const Daniel = require('../../KJV/Daniel')
const Deuteronomy = require('../../KJV/Deuteronomy')
const Ecclesiastes = require('../../KJV/Ecclesiastes')
const Ephesians = require('../../KJV/Ephesians')
const Esther = require('../../KJV/Esther')
const Exodus = require('../../KJV/Exodus')
const Ezekiel = require('../../KJV/Ezekiel')
const Ezra = require('../../KJV/Ezra')
const First_Chronicles = require('../../KJV/First_Chronicles')
const First_Corinthians = require('../../KJV/First_Corinthians')
const First_John = require('../../KJV/First_John')
const First_Kings = require('../../KJV/First_Kings')
const First_Peter = require('../../KJV/First_Peter')
const First_Samuel = require('../../KJV/First_Samuel')
const First_Thessalonians = require('../../KJV/First_Thessalonians')
const First_Timothy = require('../../KJV/First_Timothy')
const Galatians = require('../../KJV/Galatians')
const Genesis = require('../../KJV/Genesis')
const Habakkuk = require('../../KJV/Habakkuk')
const Haggai = require('../../KJV/Haggai')
const Hebrews = require('../../KJV/Hebrews')
const Hosea = require('../../KJV/Hosea')
const Isaiah = require('../../KJV/Isaiah')
const James = require('../../KJV/James')
const Jeremiah = require('../../KJV/Jeremiah')
const Job = require('../../KJV/Job')
const Joel = require('../../KJV/Joel')
const John = require('../../KJV/John')
const Jonah = require('../../KJV/Jonah')
const Joshua = require('../../KJV/Joshua')
const Jude = require('../../KJV/Jude')
const Judges = require('../../KJV/Judges')
const Lamentations = require('../../KJV/Lamentations')
const Leviticus = require('../../KJV/Leviticus')
const Luke = require('../../KJV/Luke')
const Malachi = require('../../KJV/Malachi')
const Mark = require('../../KJV/Mark')
const Matthew = require('../../KJV/Matthew')
const Micah = require('../../KJV/Micah')
const Nahum = require('../../KJV/Nahum')
const Nehemiah = require('../../KJV/Nehemiah')
const Numbers = require('../../KJV/Numbers')
const Obadiah = require('../../KJV/Obadiah')
const Philemon = require('../../KJV/Philemon')
const Philippians = require('../../KJV/Philippians')
const Proverbs = require('../../KJV/Proverbs')
const Psalms = require('../../KJV/Psalms')
const Revelation = require('../../KJV/Revelation')
const Romans = require('../../KJV/Romans')
const Ruth = require('../../KJV/Ruth')
const Second_Chronicles = require('../../KJV/Second_Chronicles')
const Second_Corinthians = require('../../KJV/Second_Corinthians')
const Second_John = require('../../KJV/Second_John')
const Second_Kings = require('../../KJV/Second_Kings')
const Second_Peter = require('../../KJV/Second_Peter')
const Second_Samuel = require('../../KJV/Second_Samuel')
const Second_Thessalonian = require('../../KJV/Second_Thessalonian')
const Second_Timothy = require('../../KJV/Second_Timothy')
const Song_of_Solomon = require('../../KJV/Song_of_Solomon')
const Third_John = require('../../KJV/Third_John')
const Titus = require('../../KJV/Titus')
const Zechariah = require('../../KJV/Zechariah')
const Zephaniah = require('../../KJV/Zephaniah')
const books = [Acts,Amos,Colossians,Daniel,Deuteronomy,Ecclesiastes,Ephesians,Esther,Exodus,Ezekiel,Ezra,First_Chronicles,First_Corinthians,First_John,First_Kings,First_Peter,First_Samuel,First_Thessalonians,First_Timothy,Galatians,Genesis,Habakkuk,Haggai,Hebrews,Hosea,Isaiah,James,Jeremiah,Job,Joel,John,Jonah,Joshua,Jude,Judges,Lamentations,Leviticus,Luke,Malachi,Mark,Matthew,Micah,Nahum,Nehemiah,Numbers,Obadiah,Philemon,Philippians,Proverbs,Psalms,Revelation,Romans,Ruth,Second_Chronicles,Second_Corinthians, Second_John ,Second_Kings,Second_Peter,Second_Samuel,Second_Thessalonian,Second_Timothy,Song_of_Solomon,Third_John,Titus,Zechariah,Zephaniah]
const bookNames = ["Acts", "Amos", "Colossians", "Daniel", "Deuteronomy", "Ecclesiastes", "Ephesians", "Esther", "Exodus", "Ezekiel", "Ezra", "First Chronicles", "First Corinthians", "First John", "First Kings", "First Peter", "First Samuel", "First Thessalonians", "First Timothy", "Galatians", "Genesis", "Habakkuk", "Haggai", "Hebrews", "Hosea", "Isaiah", "James", "Jeremiah", "Job", "Joel", "John", "Jonah", "Joshua", "Jude", "Judges", "Lamentations", "Leviticus", "Luke", "Malachi", "Mark", "Matthew", "Micah", "Nahum", "Nehemiah", "Numbers", "Obadiah", "Philemon", "Philippians", "Proverbs", "Psalms", "Revelation", "Romans", "Ruth", "Second Chronicles", "Second Corinthians", "Second John", "Second Kings", "Second Peter", "Second Samuel", "Second Thessalonian", "Second Timothy", "Song of Solomon", "Third John", "Titus", "Zechariah", "Zephaniah" ]

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('books').truncate()
  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < books[i].length; j++) {
      for (let x = 0; x < books[i][j].length; x++) {
        console.log(books[i][j][x])
        await knex('books').insert([
          {book: bookNames[i], chapter: j + 1, verse: books[i][j][x]}
        ]);
      }
    }
  }
};
