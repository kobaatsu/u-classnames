# UTILITY-CSS

## BREAK POINT / POSTFIX

  - *-xs -> `@media (max-width: 575.98px)`
  - *-sm -> `@media (min-width:576px) and (max-width: 767.98px)`
  - *-md -> `@media (min-width:768px) and (max-width: 991.98px)`
  - *-lg -> `@media (min-width:992px) and (max-width: 1199.98px)`
  - *-xl -> `@media (min-width:1200)`

## UTILITIES

### border

  - .u-bdn -> `border: none`
  - .u-bdtn -> `border-top: none`
  - .u-bdrn -> `border-right: none`
  - .u-bdbn -> `border-bottom: none`
  - .u-bdln -> `border-left: none`

### clear

  - .u-clr -> `text-align: right`
  - .u-cll -> `text-align: left`
  - .u-clb -> `text-align: both`
  - .u-cln -> `text-align: none`

### clearfix

  - .u-cf

### display

  - .u-db -> `display: block`
  - .u-di -> `display: inline`
  - .u-dt -> `display: table`
  - .u-df -> `display: flex`
  - .u-dg -> `display: grid`
  - .u-dli -> `display: list-item`
  - .u-dtr -> `display: table-row`
  - .u-dtc -> `display: table-cell`
  - .u-dn -> `display: none`
  - .u-dib -> `display: inline-block`
  - .u-dif -> `display: inline-flex`

### flex

```html
  <div class='u-df u-fxdr u-fxdc-xs u-jcbt u-aic'>
    <div class='u-fx'>foo</div>
    <div class='u-fx'>bar</div>
  </div>
```

#### flex-direction

  - .u-fxdr -> `flex-direction: row`
  - .u-fxdc -> `flex-direction: column`
  - .u-fxdrr -> `flex-direction: row-reverse`
  - .u-fxdcr -> `flex-direction: column-reverse`

#### flex

  - .u-fx -> `flex: 1 1 auto`

#### flex-grow

  - .u-fxg0 -> `flex-grow: 0`
  - .u-fxg1 -> `flex-grow: 1`

#### flex-shrink

  - .u-fxs0 -> `flex-shrink: 0`
  - .u-fxs1 -> `flex-shrink: 1`

#### justify-content

  - .u-jcs -> `justify-content: flex-start`
  - .u-jce -> `justify-content: flex-end`
  - .u-jcc -> `justify-content: center`
  - .u-jcbt -> `justify-content: space-between`
  - .u-jcar -> `justify-content: space-around`

#### flex-wrap
  - .u-fxw -> `flex-wrap: wrap`
  - .u-fxwn -> `flex-wrap: nowrap`

#### align-items

  - .u-ais -> `align-items: flex-start`
  - .u-aie -> `align-items: flex-end`
  - .u-aic -> `align-items: center`
  - .u-aibl -> `align-items: baseline`
  - .u-aist -> `align-items: stretch`

#### align-content

  - .u-acs -> `align-content: flex-start`
  - .u-ace -> `align-content: flex-end`
  - .u-acc -> `align-content: center`
  - .u-acbt -> `align-content: space-between`
  - .u-acar -> `align-content: space-around`
  - .u-acst -> `align-content: stretch`

#### align-self

  - .u-ass -> `align-self: flex-start`
  - .u-ase -> `align-self: flex-end`
  - .u-asc -> `align-self: center`
  - .u-asbl -> `align-self: baseline`
  - .u-asst -> `align-self: stretch`

### float

  - .u-flr -> `text-align: right`
  - .u-fll -> `text-align: left`
  - .u-fln -> `text-align: none`

### font-size

`[val]` には 10 ~ 16 / 18 / 20 / 22 / 24 / 26 / 28 / 30 / 32 / 35 / 40 / 50 のいずれかの数値が入る(単位 px)

```html
  <div class='u-fz18 u-fz12-sm'>hoge</div>
```

  - .u-fz[val] -> `font-size: [val]px`

### font-style

  - .u-fsn -> `font-style: normal`
  - .u-fsi -> `font-style: italic`

### font-weight

  - .u-fwb -> `font-weight: bold`

### margin

`[val]` には -20 ~ 100 までの数値が入る(単位 px / 5px刻み)

```html
  <div class='u-mt30 u-mt10-xs'>hoge</div>
```

  - .u-m[val] -> `margin: [val]px`
  - .u-mr[val] -> `margin-right: [val]px`
  - .u-mb[val] -> `margin-bottom: [val]px`
  - .u-ml[val] -> `margin-left: [val]px`
  - .u-my[val] -> `margin-top: [val]px; margin-bottom: [val]px`
  - .u-mx[val] -> `margin-right: [val]px; margin-left: [val]px`

  - .u-ma -> `margin: auto`
  - .u-mxa -> `margin-right: auto; margin-left: auto`

### max-height / max-width

  - .u-mah100p -> `max-height: 100%`
  - .u-maw100p -> `max-width: 100%`

### padding

`[val]` には 0 ~ 100 までの数値が入る(単位 px / 5px刻み)

  - .u-p[val] -> `padding: [val]px`
  - .u-pr[val] -> `padding-right: [val]px`
  - .u-pb[val] -> `padding-bottom: [val]px`
  - .u-pl[val] -> `padding-left: [val]px`
  - .u-py[val] -> `padding-top: [val]px; padding-bottom: [val]px`
  - .u-px[val] -> `padding-right: [val]px; padding-left: [val]px`

### position

  - .u-pos -> `position: static`
  - .u-por -> `position: relative`
  - .u-poa -> `position: absolute`
  - .u-pof -> `position: fixed`

### text-align

  - .u-tar -> `text-align: right`
  - .u-tac -> `text-align: canter`
  - .u-tal -> `text-align: left`
  - .u-taj -> `text-align: justify`

### vartical-align

  - .u-vabl -> `vartical-align: baseline`
  - .u-vat -> `vartical-align: top`
  - .u-vam -> `vartical-align: middle`
  - .u-vab -> `vartical-align: bottom`
  - .u-vatb -> `vartical-align: text-bottom`
  - .u-vatt -> `vartical-align: text-top`

### white-space

  - .u-wsn -> `white-space: nowrap`
