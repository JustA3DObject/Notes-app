import chalk from 'chalk'
import notes from './notes.js';
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

console.log(chalk.green.bold('[--RUNNING PROGRAM--]'))

// Create add command
yargs(hideBin(process.argv))
  .command('add', 'Add a new note', (yargs) => {
    builder: {
      title:{
        describe: 'Note title'; 
        demandOption: true; 
        type: 'string'
    };
      body:{
        describe: 'Note body'; 
        demandOption: true; 
        type: 'string'
      }
  }
  }, (argv) => {
    notes.addNote(argv.title, argv.body)})
  .parse()

// Create remove command
yargs(hideBin(process.argv))
  .command('remove', 'Remove a note', (yargs) => {
    builder: {
      title:{
        describe: 'Note title'; 
        demandOption: true; 
        type: 'string';
    }
  }}, (argv) => {
    notes.removeNote(argv.title)})
  .demandCommand(1)
  .parse()

// Create read command
yargs(hideBin(process.argv))
  .command('read', 'Read a note', (yargs) => {
    builder:{
      title:{
        describe: 'Note title';
        demandOption: true;
        type: 'string'
      }
    }
  }, (argv) => {
    notes.readNote(argv.title)})
  .demandCommand(1)
  .parse()

// Create list command
yargs(hideBin(process.argv))
  .command('list', 'List all notes', (yargs) => {
    notes.listNotes()
  }, (argv) => {
    console.info(argv)})
  .demandCommand(1)
  .parse()