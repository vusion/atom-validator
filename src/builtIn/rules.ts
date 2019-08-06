import { Validator, Rule } from "../types";

import * as en_US from '../locales/en-US.json';
import * as zh_CN from '../locales/zh-CN.json';

const messages: { [prop: string]: { [prop: string]: string } } = {
    'en-US': en_US,
    'zh-CN': zh_CN,
}

export default function localizeRules(locale: string) {
    const localized = messages[locale || 'zh-CN'];

    return {
        required: { required: true, trigger: 'blur', message: localized['required'] } as Rule,
        filled: { required: true, trigger: 'blur', message: localized['filled'] } as Rule,
        notEmpty: { required: true, trigger: 'input+blur', message: localized['notEmpty'] } as Rule,
        empty: { trigger: 'input+blur', message: localized['empty'] } as Rule,
        minLength: { trigger: 'blur', message: localized['minLength'] } as Rule,
        maxLength: { trigger: 'blur', message: localized['maxLength'] } as Rule,
        rangeLength: { trigger: 'blur', message: localized['rangeLength'] } as Rule,
        min: { trigger: 'blur', message: localized['min'] } as Rule,
        max: { trigger: 'blur', message: localized['max'] } as Rule,
        range: { trigger: 'blur', message: localized['range'] } as Rule,
        pattern: { trigger: 'input+blur', message: localized['pattern'] } as Rule,
        equals: { trigger: 'blur', message: localized['equals'] } as Rule,
        confirmed: { validate: 'equals', trigger: 'blur', message: localized['confirmed'] } as Rule,
        includes: { trigger: 'input+blur', message: localized['includes'] } as Rule,
        excludes: { trigger: 'input+blur', message: localized['excludes'] } as Rule,
        included: { trigger: 'input+blur', message: localized['included'] } as Rule,
        excluded: { trigger: 'input+blur', message: localized['excluded'] } as Rule,
        unique: { validate: 'excluded', trigger: 'blur', message: localized['unique'] } as Rule,
        string: { trigger: 'input+blur', message: localized['string'] } as Rule,
        number: { trigger: 'input+blur', message: localized['number'] } as Rule,
        numeric: { trigger: 'input+blur', message: localized['numeric'] } as Rule,
        integer: { trigger: 'input+blur', message: localized['integer'] } as Rule,
        decimal: { trigger: 'blur', message: localized['decimal'] } as Rule,
        boolean: { trigger: 'input+blur', message: localized['boolean'] } as Rule,
        function: { trigger: 'input+blur', message: localized['function'] } as Rule,
        object: { trigger: 'input+blur', message: localized['object'] } as Rule,
        plainObject: { trigger: 'input+blur', message: localized['plainObject'] } as Rule,
        array: { trigger: 'input+blur', message: localized['array'] } as Rule,
        alpha: { trigger: 'input+blur', message: localized['alpha'] } as Rule,
        alphaNumeric: { trigger: 'input+blur', message: localized['alphaNumeric'] } as Rule,
        email: { trigger: 'blur', message: localized['email'] } as Rule,
        ip: { trigger: 'blur', message: localized['ip'] } as Rule,
        ipRange: { trigger: 'blur', message: localized['ipRange'] } as Rule,
        port: { trigger: 'blur', message: localized['port'] } as Rule,
        url: { trigger: 'blur', message: localized['url'] } as Rule,
        macAddress: { trigger: 'blur', message: localized['macAddress'] } as Rule,
        md5: { trigger: 'blur', message: localized['md5'] } as Rule,
        '^az': { trigger: 'input+blur', message: localized['^az'] } as Rule,
        '^az09': { trigger: 'input+blur', message: localized['^az09'] } as Rule,
        '^az09_': { trigger: 'input+blur', message: localized['^az09_'] } as Rule,
        '^azAZ': { trigger: 'input+blur', message: localized['^azAZ'] } as Rule,
        '^azAZ09': { trigger: 'input+blur', message: localized['^azAZ09'] } as Rule,
        '^azAZ09_': { trigger: 'input+blur', message: localized['^azAZ09_'] } as Rule,
        'az09$': { trigger: 'blur', message: localized['az09$'] } as Rule,
        'azAZ09$': { trigger: 'blur', message: localized['azAZ09$'] } as Rule,
        '^09$': { trigger: 'input+blur', message: localized['^09$'] } as Rule,
        '^az09$': { trigger: 'input+blur', message: localized['^az09$'] } as Rule,
        '^az09-$': { trigger: 'input+blur', message: localized['^az09-$'] } as Rule,
        '^az09-.$': { trigger: 'input+blur', message: localized['^az09-.$'] } as Rule,
        '^azAZ09$': { trigger: 'input+blur', message: localized['^azAZ09$'] } as Rule,
        '^azAZ09-$': { trigger: 'input+blur', message: localized['^azAZ09-$'] } as Rule,
        '^azAZ09_$': { trigger: 'input+blur', message: localized['^azAZ09_$'] } as Rule,
        '^azAZ09-_$': { trigger: 'input+blur', message: localized['^azAZ09-_$'] } as Rule,
        'without--': { trigger: 'input+blur', message: localized['without--'] } as Rule,
        'without__': { trigger: 'input+blur', message: localized['without__'] } as Rule,
    } as { [prop: string]: Rule };
}
