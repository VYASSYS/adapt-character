define(function (require) {
    var ComponentView = require('coreViews/componentView');
    var Adapt = require('coreJS/adapt');

    var Character = ComponentView.extend({

        preRender: function () {
            //this.listenTo(Adapt, 'device:changed', this.printChart);
        },

        postRender: function () {
            this.setReadyStatus();
            //this.setCompletionStatus();
            this.setCharacter();
        },

        setCharacter: function () {
            var characterId = this.model.get('characterId');
            this.log('characterId = ' + characterId);
        },
		
		getCharacterId: function () {
            var characterId = this.model.get('characterId');
            return characterId;
        },
		
		log: function (message) {
			console.log('adapt-character:log:' + message);
		}
    });

    Adapt.register('character', Character);
    return Character;
});