// models/User.js
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        full_name: DataTypes.STRING,
        birthday: DataTypes.DATE,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        picture: DataTypes.STRING,
        isAdmin: DataTypes.BOOLEAN 
    });

    User.associate = models => {
        User.belongsToMany(models.Event, { through: 'UserEvent' });
    };

    return User;
};
