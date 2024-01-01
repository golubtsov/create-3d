const TRANSLATOR_TYPE_OBJECT = {
    'box': 'Куб',
    'sphere': 'Сфера',
    'ellipsoid': 'Эллипсоид',
    'cone': 'Конус',
    'cylinder': 'Цилиндр',
}

const translateObjType = (objType) => {
    return TRANSLATOR_TYPE_OBJECT[objType];
}