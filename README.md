***HOW TO RUN***

**Frontend**
Use a live server for index.html
I recommend VSCode Extension - "Live Server" by Ritwick Dey

**Backend**
cd backend\dsavisuals
(press enter)
mvn spring-boot:run
(press enter)

-Everything should be live and working.

***Description***
GOAL: Visualize data structures and algorithms.

Overview
-User inputs up to 12 numbers(affects length of bars). 
-Click submit to show bars corresponding to those numbers.
-Click sort to see bars get sorted in realtime. 
-Submit button: displays unordered bars then sends (aka POST) numbers to the backend.
-Backend returns json of steps and end result for sorting the unsorted numbers.
-Sort button: calls js function that loops through json steps until reaching end result.

Current Algorithms:
-Selection Sort.

Future Updates:
-To be added: Insertion, Bubble Sort.
-Scalable Number Inputs + Randomizer.
-More colors for bars.

