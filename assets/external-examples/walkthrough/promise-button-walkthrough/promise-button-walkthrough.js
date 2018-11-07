new EventLoopAnimation(document.querySelector('.event-loop-walkthrough'))
    .moveToLineBarPan()
    .state().pushStack('main.js')
    .state().moveToLine(15).showCodeBar()
    .state().pushStack('Listener 1 Callback').moveToLine(2)
    .state().pushMicrotask()
    .state().moveToLine(5)
    .state().pushStack('log(\'Listener 1\')').pushLog()
    .state().popStack()
    .state().popStack().moveToLine(15)
    .state().pushStack('Listener 2 Callback').moveToLine(9)
    .state().pushMicrotask()
    .state().moveToLine(12)
    .state().pushStack('log(\'Listener 2\')').pushLog()
    .state().popStack()
    .state().popStack().moveToLine(15)
    .state().popStack().hideCodeBar().commentary("Stack is Empty")
    .state().hideCommentary()
    .state().activateMicrotask().pushStack('Microtask 1 Callback').moveToLine(3).showCodeBar()
    .state().pushStack('log(\'Microtask 1\')').pushLog()
    .state().popStack().hideCodeBar()
    .state().shiftMicrotask().popStack().commentary("Stack is Empty")
    .state().hideCommentary()
    .state().activateMicrotask().pushStack('Microtask 2 Callback').moveToLine(10).showCodeBar()
    .state().pushStack('log(\'Microtask 2\')').pushLog()
    .state().popStack().hideCodeBar()
    .state().shiftMicrotask().popStack()
    .state().commentary('Finish ☺');