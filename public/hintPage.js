export default class hintPage extends Phaser.Scene {
    constructor() {
        super('hintPage');

        // Define hazards and PPEs as class properties
        this.flork = [
            { x: 100, y: 400, key:'flork' },
        ];

        this.chatbox = [
            { x: 400, y: 300, key: 'chatbox' },
        ];

        this.exitButton = [
            { x: 750, y: 50, key: 'exitButton' },
        ];
    }



    create() {
        // Add background
        const bg = this.add.image(400, 300, 'hintBackground').setDisplaySize(800, 600);

        // Add flork
        this.flork.forEach((flork) => {
            this.add.image(flork.x, flork.y, flork.key).setScale(1);
        });

        // Add chatbox
        this.chatbox.forEach((chatbox) => {
            this.add.image(chatbox.x, chatbox.y, chatbox.key).setScale(0.75);
        });

        // Add text
        this.add.text(300, 200, 'Where do you think the hazrd is??', { fontSize: '20px', fill: '#000' }).setScale(0.5);
        this.add.text(300, 220, 'Clcik on the part the hazard is.', { fontSize: '20px', fill: '#000' }).setScale(0.5);

        // Add exit button
        this.exitButton.forEach((exitButton) => {
            const button = this.add.text(20, 550, 'exit', { fill: '#0f0', fontSize: '20px' }).setInteractive();
            button.on('pointerdown', () => {
                // Return to the previous scene
                this.scene.start('Level1');
            });
        });
    }
}