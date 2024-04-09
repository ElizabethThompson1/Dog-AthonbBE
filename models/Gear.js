module.exports = (sequelize, DataTypes) => {
    const Gear = sequelize.define('Gear', {
        name: DataTypes.STRING,
        image: DataTypes.STRING,
        cost: DataTypes.DECIMAL(10, 2),
        size_S: DataTypes.INTEGER,
        size_M: DataTypes.INTEGER,
        size_L: DataTypes.INTEGER,
        timestamp: DataTypes.DATE
    });

    return Gear;
};
