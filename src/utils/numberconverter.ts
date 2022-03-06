export function numberConverter (labelValue: number) {

    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e+33

    ? (Math.abs(Number(labelValue)).toExponential())

    : Math.abs(Number(labelValue)) >= 1.0e+30

    ? (Math.abs(Number(labelValue)) / 1.0e+30).toFixed(3) + "Dec"

    : Math.abs(Number(labelValue)) >= 1.0e+27

    ? (Math.abs(Number(labelValue)) / 1.0e+27).toFixed(3) + "Non"

    : Math.abs(Number(labelValue)) >= 1.0e+24

    ? (Math.abs(Number(labelValue)) / 1.0e+24).toFixed(3) + "Oc"

    : Math.abs(Number(labelValue)) >= 1.0e+21

    ? (Math.abs(Number(labelValue)) / 1.0e+21).toFixed(3) + "Sep"

    :Math.abs(Number(labelValue)) >= 1.0e+18

    ? (Math.abs(Number(labelValue)) / 1.0e+18).toFixed(3) + "Sx"

    : Math.abs(Number(labelValue)) >= 1.0e+15

    ? (Math.abs(Number(labelValue)) / 1.0e+15).toFixed(3) + "Qi"

    : Math.abs(Number(labelValue)) >= 1.0e+12

    ? (Math.abs(Number(labelValue)) / 1.0e+12).toFixed(3) + "Qa"

    : Math.abs(Number(labelValue)) >= 1.0e+9

    ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(3) + "B"

    : Math.abs(Number(labelValue)) >= 1.0e+6

    ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(3) + "M"

    : Math.trunc(labelValue).toLocaleString('en-us');

}
