// models/Event.js
module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define('Event', {
        title: DataTypes.STRING,
        month: DataTypes.STRING,
        day: DataTypes.INTEGER,
        year: DataTypes.INTEGER,
        description: DataTypes.TEXT,
        address: DataTypes.STRING,
        image: DataTypes.STRING,
        price: DataTypes.DECIMAL(10, 2)
    });

    Event.associate = models => {
        Event.belongsToMany(models.User, { through: 'UserEvent' });
    };

    return Event;
};
