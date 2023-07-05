import { LOCALES } from './locales';

export const messages = {
  [LOCALES.ENGLISH]: {
    welcome: 'Welcome',

    settings: 'Settings',
    user_settings: 'User settings',
    global_settings: 'Global Setting',
    gen_settings: 'Generator Setting',

    cycles: 'Cycles',
    add_cycle: 'Add cycle unit',
    report: 'Show working report',

    change_mail_message:
      'if you change the email, the next login to the application using the specified email address',
    language: 'interface language',

    submit: 'Submit',

    brand: 'Brand name generator',
    model: 'Generator model',
    first_reglament: 'First change of time oil reglament, hours',
    next_reglament: 'Next change of time oil reglament, hours',
    power: 'Electrical power generator, kW',
    first_start: 'Date of first start generator',
    before_first_start: 'Time before first start generator, hours',
    volume_oil: 'Volume oil of generator, litre',
    volume_fuel: 'Volume of fuel tank generator, litre',

    price_oil: 'Price of engine oil',
    price_fuel: 'Price of fuel',
    price_electr: 'Price of electrical',

    patch_gen: 'Patching settings',
    new_gen: 'create new settings',

    create_cycle: 'create new working cycle',
    patch_cycle: 'patch working cycle',

    start: 'Timestamp of start cycle generator',
    stop: 'Timestamp of stop cycle generator',
    generated: 'amount electricity generated per cycle',
    refueling: 'amount fuel filled, specify when refueling',
    reoiling: 'Change of oil',

    create: 'create',
    patch: 'patch',

    sorting: 'sorting results',
    sort_data_start: 'date start',
    sort_data_stop: 'date stop',
    sort_sycle: 'cycle time',
    sort_gen: 'generation',
  },
  [LOCALES.RUSSIAN]: {
    welcome: 'Добро пожаловать',

    settings: 'Настройки',
    user_settings: 'Настройки пользователя',
    global_settings: 'Общие настройки',
    gen_settings: 'Настройки генератора',

    cycles: 'Циклы',
    add_cycle: 'Добавить робочий цикл',
    report: 'Показать отчет',

    change_mail_message:
      'Если будет изменен email, при следующем входе в приложение укажите актуальный email',
    language: 'язык интерфейса',

    submit: 'Сохранить',

    brand: 'Название генератора',
    model: 'Модель генератора',
    first_reglament: 'Регламент первой замены масла, час',
    next_reglament: 'Регламент последующей замены масла, час',
    power: 'Электрическая мощность генератора, kW',
    first_start: 'Дата первого запуска генератора',
    before_first_start: 'Наработка до первого запуска, час',
    volume_oil: 'Объем картера масла, литр',
    volume_fuel: 'объем топливного бака, литр',

    price_oil: 'Цена масла',
    price_fuel: 'Цена топлива',
    price_electr: 'Цена электроэнергии',

    patch_gen: 'Обновить настройки',
    new_gen: 'Создать новые настройки',

    create_cycle: 'создание рабочего цикла',
    patch_cycle: 'правка рабочего цикла',

    start: 'Дата и время запуска цикла генератора',
    stop: 'Дата и время остановки цикла генератора',
    generated: 'Генерация электроэнергии за цикл',
    refueling: 'заправка генератора, количество топлива',
    reoiling: 'замена масла',

    create: 'создать',
    patch: 'изменить',

    sorting: 'сортировка результатов',
    sort_data_start: 'дата старта',
    sort_data_stop: 'дата остановки',
    sort_sycle: 'время работы',
    sort_gen: 'генерация',
  },
  [LOCALES.UKRAINIAN]: {
    welcome: 'Ласкаво просимо',

    settings: 'Налаштування',
    user_settings: 'Налаштування користувача',
    global_settings: 'Загальні налаштування',
    gen_settings: 'Налаштування генератора',

    cycles: 'Цикли',
    add_cycle: 'Додати робочий цикл',
    report: 'Показати звіт',

    change_mail_message:
      'Якщо буде змінений email, при наступному вході в застосунок вкажіть актуальний email',
    language: 'мова інтерфейсу',

    submit: 'Зберегти',

    brand: 'Назва генератора',
    model: 'Модель генератора',
    first_reglament: 'Регламент першої замени мастила, год',
    next_reglament: 'Регламент наступної замені мастила, год',
    power: 'Электрична потужність генератора, kW',
    first_start: 'Дата першого пуску генератора',
    before_first_start: 'Напрацювання до первого пуску, год',
    volume_oil: 'Об єм картера мастила, літр',
    volume_fuel: 'об ем паливного баку, літр',

    price_oil: 'Вартість мастила',
    price_fuel: 'Вартість палива',
    price_electr: 'Вартість електроенергії',

    patch_gen: 'Оновити налаштування',
    new_gen: 'Створити нові налаштування',

    create_cycle: 'створення робочего циклу',
    patch_cycle: 'правка робочего циклу',

    start: 'Дата та час пуску циклу генератора',
    stop: 'Дата та час зупинки циклу генератора',
    generated: 'Генерация електроенергії за цикл',
    refueling: 'заправка генератора, кількість палива',
    reoiling: 'заміна мастила',

    create: 'створити',
    patch: 'змінити',

    sorting: 'сортування результатів',
    sort_data_start: 'дата старту',
    sort_data_stop: 'дата зупинки',
    sort_sycle: 'час работи',
    sort_gen: 'генерація',
  },
};
