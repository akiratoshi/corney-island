module.exports = {
  params: {
    designator: 'LED',
    P1: {type: 'net', value: 'VDD'},
    P2: undefined,
    P3: {type: 'net', value: 'GND'},
    P4: undefined,
    reverse: false,
    flip: false, // False = per-key, True = underglow
    side: 'B',
  },
  body: p => {
    const standard_opening = `
      (module YS-SK6812MINI-E (layer F.Cu) (tedit 5F70BC98)
      ${p.at /* parametric position */}

        (fp_text reference "${p.ref}" (at 0.2 11.2) (layer F.SilkS) ${p.ref_hide}
          (effects (font (size 1 1) (thickness 0.15)))
        )
        (fp_text value YS-SK6812MINI-E (at -0.6 -9.8) (layer F.Fab)
          (effects (font (size 1 1) (thickness 0.15)))
        )
  
        (fp_line (start -1.6 -1.4) (end 1.6 -1.4) (layer Dwgs.User) (width 0.12))
        (fp_line (start -1.6 1.4) (end 1.6 1.4) (layer Dwgs.User) (width 0.12))
        (fp_line (start -1.6 -1.4) (end -1.6 1.4) (layer Dwgs.User) (width 0.12))
        (fp_line (start 1.6 -1.4) (end 1.6 1.4) (layer Dwgs.User) (width 0.12))
        (fp_line (start -1.6 -1.05) (end -2.94 -1.05) (layer Dwgs.User) (width 0.12))
        (fp_line (start -2.94 -1.05) (end -2.94 -0.37) (layer Dwgs.User) (width 0.12))
        (fp_line (start -2.94 -0.37) (end -1.6 -0.37) (layer Dwgs.User) (width 0.12))
        (fp_line (start -1.6 0.35) (end -2.94 0.35) (layer Dwgs.User) (width 0.12))
        (fp_line (start -2.94 1.03) (end -1.6 1.03) (layer Dwgs.User) (width 0.12))
        (fp_line (start -2.94 0.35) (end -2.94 1.03) (layer Dwgs.User) (width 0.12))
        (fp_line (start 1.6 1.03) (end 2.94 1.03) (layer Dwgs.User) (width 0.12))
        (fp_line (start 2.94 0.35) (end 1.6 0.35) (layer Dwgs.User) (width 0.12))
        (fp_line (start 2.94 1.03) (end 2.94 0.35) (layer Dwgs.User) (width 0.12))
        (fp_line (start 1.6 -0.37) (end 2.94 -0.37) (layer Dwgs.User) (width 0.12))
        (fp_line (start 2.94 -1.05) (end 1.6 -1.05) (layer Dwgs.User) (width 0.12))
        (fp_line (start 2.94 -0.37) (end 2.94 -1.05) (layer Dwgs.User) (width 0.12))
    `
    const front = `
        (fp_line (start -1.6 0.7) (end -0.8 1.4) (layer Dwgs.User) (width 0.12))
        (fp_line (start -3.9 1.85) (end 3.9 1.85) (layer F.SilkS) (width 0.12))
        (fp_line (start 3.9 -1.85) (end -3.9 -1.85) (layer F.SilkS) (width 0.12))
        (fp_line (start -3.9 0.25) (end -3.9 1.85) (layer F.SilkS) (width 0.12))
        (pad 1 smd rect (at -2.65 -0.7 ${p.rot}) (size 1.5 1) (layers F.Cu F.Paste F.Mask) ${p.P1.str})
        (pad 2 smd rect (at -2.65 0.7 ${p.rot}) (size 1.5 1) (layers F.Cu F.Paste F.Mask) ${p.P2.str})
        (pad 4 smd rect (at 2.65 -0.7 ${p.rot}) (size 1.5 1) (layers F.Cu F.Paste F.Mask) ${p.P4.str})
        (pad 3 smd rect (at 2.65 0.7 ${p.rot}) (size 1.5 1) (layers F.Cu F.Paste F.Mask) ${p.P3.str})
    `
    const front_flipped = `
        (fp_line (start 1.6 0.7) (end 0.8 1.4) (layer Dwgs.User) (width 0.12))
        (fp_line (start 3.9 1.85) (end -3.9 1.85) (layer F.SilkS) (width 0.12))
        (fp_line (start -3.9 -1.85) (end 3.9 -1.85) (layer F.SilkS) (width 0.12))
        (fp_line (start 3.9 0.25) (end 3.9 1.85) (layer F.SilkS) (width 0.12))
        (pad 4 smd rect (at -2.65 -0.7 ${p.rot}) (size 1.5 1) (layers F.Cu F.Paste F.Mask) ${p.P4.str})
        (pad 3 smd rect (at -2.65 0.7 ${p.rot}) (size 1.5 1) (layers F.Cu F.Paste F.Mask) ${p.P3.str})
        (pad 1 smd rect (at 2.65 -0.7 ${p.rot}) (size 1.5 1) (layers F.Cu F.Paste F.Mask) ${p.P1.str})
        (pad 2 smd rect (at 2.65 0.7 ${p.rot}) (size 1.5 1) (layers F.Cu F.Paste F.Mask) ${p.P2.str})
    `
    const back = `
      (fp_line (start -1.6 -0.7) (end -0.8 -1.4) (layer Dwgs.User) (width 0.12))
      (fp_line (start 3.9 1.85) (end -3.9 1.85) (layer B.SilkS) (width 0.12))
      (fp_line (start -3.9 -1.85) (end 3.9 -1.85) (layer B.SilkS) (width 0.12))
      (fp_line (start -3.9 -0.25) (end -3.9 -1.85) (layer B.SilkS) (width 0.12))
      (pad 3 smd rect (at 2.65 -0.7 ${p.rot}) (size 1.5 1) (layers B.Cu B.Paste B.Mask) ${p.P3.str})
      (pad 4 smd rect (at 2.65 0.7 ${p.rot}) (size 1.5 1) (layers B.Cu B.Paste B.Mask) ${p.P4.str})
      (pad 2 smd rect (at -2.65 -0.7 ${p.rot}) (size 1.5 1) (layers B.Cu B.Paste B.Mask) ${p.P2.str})
      (pad 1 smd rect (at -2.65 0.7 ${p.rot}) (size 1.5 1) (layers B.Cu B.Paste B.Mask) ${p.P1.str})
    `
    const back_flipped = `
      (fp_line (start 1.6 -0.7) (end 0.8 -1.4) (layer Dwgs.User) (width 0.12))
      (fp_line (start -3.9 1.85) (end 3.9 1.85) (layer B.SilkS) (width 0.12))
      (fp_line (start 3.9 -1.85) (end -3.9 -1.85) (layer B.SilkS) (width 0.12))
      (fp_line (start 3.9 -0.25) (end 3.9 -1.85) (layer B.SilkS) (width 0.12))
      (pad 2 smd rect (at 2.65 -0.7 ${p.rot}) (size 1.5 1) (layers B.Cu B.Paste B.Mask) ${p.P2.str})
      (pad 1 smd rect (at 2.65 0.7 ${p.rot}) (size 1.5 1) (layers B.Cu B.Paste B.Mask) ${p.P1.str})
      (pad 3 smd rect (at -2.65 -0.7 ${p.rot}) (size 1.5 1) (layers B.Cu B.Paste B.Mask) ${p.P3.str})
      (pad 4 smd rect (at -2.65 0.7 ${p.rot}) (size 1.5 1) (layers B.Cu B.Paste B.Mask) ${p.P4.str})
    `
    const standard_closing = `
      (fp_line (start -1.8 -1.55) (end -1.8 1.55) (layer Edge.Cuts) (width 0.12))
      (fp_line (start -1.8 1.55) (end 1.8 1.55) (layer Edge.Cuts) (width 0.12))
      (fp_line (start 1.8 1.55) (end 1.8 -1.55) (layer Edge.Cuts) (width 0.12))
      (fp_line (start 1.8 -1.55) (end -1.8 -1.55) (layer Edge.Cuts) (width 0.12))
    )
    `

    let final = standard_opening;

    if(p.side == "F" || p.reverse) {
      if(p.flip) {
        final += front_flipped;
      } else {
        final += front;
      }
    }
    if(p.side == "B" || p.reverse) {
      if(p.flip) {
        final += back_flipped;
      } else {
        final += back;
      }
    }

    final += standard_closing;

    return final;
  }
}