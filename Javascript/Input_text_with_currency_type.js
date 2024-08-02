 <TextInput
              icon={<Text fw={"bold"}>Rp.</Text>}
              withAsterisk
              placeholder="0"
              label="Nominal"
              maxLength={sisaDana.toLocaleString().length}
              error={
                isOver ? (
                  <ComponentGlobal_ErrorInput text="Nominal melebihi sisa dana" />
                ) : (
                  ""
                )
              }
              value={value.nilai}
              onChange={(val) => {

                const match = val.currentTarget.value
                  .replace(/\./g, "")
                  .match(/^[0-9]+$/);

                if (val.currentTarget.value === "")
                  return setValue({
                    ...value,
                    nilai: "",
                  });

                if (!match?.[0]) return null;

                const nilai = val.currentTarget.value.replace(/\./g, "");
                const target = Intl.NumberFormat("id-ID").format(+nilai);

                if (+nilai > sisaDana) {
                  setIsOver(true);
                } else {
                  setIsOver(false);
                }
                setNilaiNominal(+nilai);
                setValue({
                  ...value,
                  nilai: target,
                });
              }}
            />
