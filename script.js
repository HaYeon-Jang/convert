
<HTML><HEAD>
<META http-equiv="content-type" content="text/html;charset=euc-kr">
<TITLE>길이, 넓이, 부피, 무게 단위 환산하기</TITLE>
<link rel="stylesheet" href="mystyle.css" type="text/css">
<SCRIPT language=JavaScript>
function makeArray(n){
 //배열을 만들기 위한 함수
 this.length=n;
 for(i=1;i<=n;i++)
  this[i]=0;
 return this;
  }

function calculate1(form){
 //거리환산을 하는 함수
 leng=new makeArray(10);
  leng[1]=392727;
  leng[2]=eval(leng[1]/100);
  leng[3]=eval(leng[1]/2.54);
  leng[4]=eval(leng[3]/12);
  leng[5]=eval(leng[4]/3);
  leng[6]=eval(leng[5]/1760);
  leng[7]=12960;
  leng[8]=eval(leng[7]/6);
  leng[9]=eval(leng[8]/60);
  leng[10]=eval(leng[9]/36);
 aaa=leng[form.length.selectedIndex+1];
 for(j=2;j<=11;j++)
  form.elements[j].value=form.num1.value*(leng[j-1]/aaa);
}
</SCRIPT>
</HEAD>
<BODY bgColor=white>
<TABLE cellPadding=5 width=650 align=center border=0>
  <TBODY>
  <TR>
    <TD width=1094>
      <P align=center><FONT size=2></FONT><FONT size=5><B><U>UNIT 
      CONVERTER</U></B></FONT></P>
      <FORM method=get>
      <P align=center><FONT size=2>아래에 변환하고 싶은 </FONT><FONT color=#ff0080 
      size=2>숫자를 입력</FONT><FONT size=2>하고 </FONT><FONT color=#ff0080 size=2>단위를 
      지정</FONT><FONT size=2>하면 변환된 길이가 나타납니다.<BR>단위를 지정하는 순간 변환되어 나타납니다. 따라서, 
      </FONT><FONT color=#ff0080 size=2>단위지정을 마지막에 해야 합니다</FONT><FONT size=2>. 
      <BR>(SELECT YOUR UNIT AFTER WRITING, UNIT SELECT IS LAST)</FONT></P>
      <a name=Length>&nbsp;</a><P align=center><FONT size=3><B><U>길이 변환(LENGTH)</U><BR></B></FONT><FONT 
      size=2><BR>변환할 값 넣는곳 --&gt; <INPUT onchange=calculate1(this.form) 
      value=0 name=num1> <SELECT onchange=calculate1(this.form); name=length> 
        <OPTION value=cm1 selected>센티미터(Cm)</OPTION> <OPTION 
        value=m1>미터(M)</OPTION> <OPTION value=inch1>인치(inch)</OPTION> <OPTION 
        value=feet1>피트(feet)</OPTION> <OPTION value=yard1>야드(yard)</OPTION> 
        <OPTION value=mile1>마일(mile)</OPTION> <OPTION value=ja1>자</OPTION> 
        <OPTION value=gan1>간</OPTION> <OPTION value=jeng1>정</OPTION> <OPTION 
        value=li1>리</OPTION></SELECT> &lt;--SELECT UNIT</FONT> 
      <DIV align=center>
          <TABLE width="80%" border=0>
            <TBODY> 
            <TR>
              <TH align=middle width="15%" bgColor=#CCFFFF> 
                <P><FONT size=2>센티미터(Cm)</FONT></P></TH>
          <TD>
            <P><FONT size=2><INPUT onfocus=this.blur(); value=0 
            name=cm></FONT></P></TD>
              <TH align=middle width="15%" bgColor=#CCFFFF> 
                <P><FONT size=2>미터(Meter)</FONT></P></TH>
          <TD>
            <P><FONT size=2><INPUT onfocus=this.blur(); value=0 
            name=m></FONT></P></TD></TR>
        <TR>
              <TH align=middle bgColor=#CCFFFF> 
                <P><FONT size=2>인치(Inch)</FONT></P></TH>
          <TD>
            <P><FONT size=2><INPUT onfocus=this.blur(); value=0 
            name=inch></FONT></P></TD>
              <TH align=middle bgColor=#CCFFFF> 
                <P><FONT size=2>피트(Feet)</FONT></P></TH>
          <TD>
            <P><FONT size=2><INPUT onfocus=this.blur(); value=0 
            name=feet></FONT></P></TD></TR>
        <TR>
              <TH align=middle bgColor=#CCFFFF> 
                <P><FONT size=2>야드(Yard)</FONT></P></TH>
          <TD>
            <P><FONT size=2><INPUT onfocus=this.blur(); value=0 
            name=yard></FONT></P></TD>
              <TH align=middle bgColor=#CCFFFF> 
                <P><FONT size=2>마일(Mile)</FONT></P></TH>
          <TD>
            <P><FONT size=2><INPUT onfocus=this.blur(); value=0 
            name=mile></FONT></P></TD></TR>
        <TR>
              <TH align=middle bgColor=#CCFFFF> 
                <P><FONT size=2>자</FONT></P></TH>
          <TD>
            <P><FONT size=2><INPUT onfocus=this.blur(); value=0 
            name=ja></FONT></P></TD>
              <TH align=middle bgColor=#CCFFFF> 
                <P><FONT size=2>간</FONT></P></TH>
          <TD>
            <P><FONT size=2><INPUT onfocus=this.blur(); value=0 
            name=gan></FONT></P></TD></TR>
        <TR>
              <TH align=middle bgColor=#CCFFFF> 
                <P><FONT size=2>정</FONT></P></TH>
          <TD>
            <P><FONT size=2><INPUT onfocus=this.blur(); value=0 
            name=jeng></FONT></P></TD>
              <TH align=middle bgColor=#CCFFFF> 
                <P><FONT size=2>리</FONT></P></TH>
          <TD>
            <P><FONT size=2><INPUT onfocus=this.blur(); value=0 
            name=li></FONT></P></TD></TR></TBODY></TABLE></DIV>
      <P>&nbsp;
  </BODY></HTML>
