on(window, 'load', function () {
    var view = new View();
    var game = new Game();
    game.init(view);
    game.restart();
    event(game);
});