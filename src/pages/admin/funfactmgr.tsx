import React from "react";

export default function FunFactMgr() {
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState("");
    const [funFacts, setFunFacts] = React.useState([] as { id: string, fact: string }[]);

    const [funFactEditor, setFunFactEditor] = React.useState(0);

    const [createFactOpen, setCreateFactOpen] = React.useState(false);
    const [createFactText, setCreateFactText] = React.useState("");

    const hasRan = React.useRef(false);

    React.useEffect(() => {
        if (!hasRan.current) {
            hasRan.current = true;

            (async function () {
                try {
                    const funFactsRes = await fetch('/api/funfacts/getall');
                    const funFactsJson = await funFactsRes.json() as { id: string, fact: string }[];
                    setFunFacts(funFactsJson);
                } catch (e: any) {
                    setError(e.toString());
                }
            })();

            setLoading(false);
        }
    }, []);


    function editorCancel() {
        setFunFactEditor(0)
    }

    function editorSave() {
        // find the fun fact with the id of funFactEditor
        // update it with the new fact

        const funFact = funFacts.find((funFact) => funFact.id == funFactEditor.toString())
        if (!funFact) {
            setFunFactEditor(0)
            return
        }

        fetch('/api/funfacts/save', {
            method: 'POST',
            body: JSON.stringify({
                id: funFact.id,
                fact: funFact.fact
            })
        }).then((x) => x.json()).then((x: any) => {
            if (x.error) {
                setError(x.error)
                return
            }

            setFunFactEditor(0)
        })
    }

    function createFact() {
        fetch('/api/funfacts/create', {
            method: 'POST',
            body: JSON.stringify({
                fact: createFactText
            })
        }).then((x) => x.json()).then((x: any) => {
            setCreateFactOpen(false)
            setCreateFactText("")
            if (x.error) {
                setError(x.error)
                return
            }
            else {
                setFunFacts([...funFacts, { id: x.id, fact: x.fact }])
            }
        })
    }

    return (
        <>
            <h1 className='text-5xl m-2'>Fun fact manager
                <button className='bg-blue-600 mx-2 rounded-md' onClick={() => setCreateFactOpen(true)}>+</button>
            </h1>
            {error != "" && <p className='text-red-500'>Error: {error}
                <button onClick={() => setError("")}>Clear</button>
            </p>}
            {loading && <p>Loading...</p>}
            {!loading && (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Fact</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {funFacts.map((funFact) => {
                            function deleteFunFact() {
                                setFunFacts(funFacts.filter((funFact2) => funFact2.id != funFact.id));
                                fetch('/api/funfacts/delete', {
                                    method: 'POST',
                                    body: JSON.stringify({
                                        id: funFact.id
                                    })
                                });
                            }

                            function editFunFact() {
                                setFunFactEditor(Number(funFact.id));
                            }

                            return (
                                <tr key={funFact.id}>
                                    <td>{funFact.id}</td>
                                    <td>{funFact.fact}</td>
                                    <td>
                                        <button className='m-1 p-1 bg-blue-600 rounded-md' onClick={editFunFact}>Edit
                                        </button>
                                        <button className='m-1 p-1 bg-red-600 rounded-md'
                                                onClick={deleteFunFact}>Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            )}

            {createFactOpen && (
                <div className='fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 rounded-md'>
                    <h2 className='text-3xl m-2'>Create fun fact</h2>
                    <label className='m-2'>Fun fact:</label>
                    <br/>
                    <textarea className='m-2 p-2 bg-gray-800 rounded-md' value={createFactText}
                              onChange={(e) => setCreateFactText(e.target.value)}/>
                    <br/>
                    <button className='m-2 p-2 bg-green-600 rounded-md' onClick={createFact}>Create</button>
                    <button className='m-2 p-2 bg-red-600 rounded-md' onClick={() => setCreateFactOpen(false)}>Close</button>
                </div>
            )}

            {funFactEditor != 0 && (
                <div className='fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 p-2 rounded-md'>
                    <h2 className='text-3xl m-2'>Fun fact editor</h2>
                    <label className='m-2'>Fun fact:</label>
                    <br/>
                    <textarea className='m-2 p-2 bg-gray-800 rounded-md'
                              value={funFacts.find((funFact) => funFact.id == funFactEditor.toString())?.fact}
                              onChange={(e) => {
                                  setFunFacts(funFacts.map((funFact) => {
                                      if (funFact.id == funFactEditor.toString()) {
                                          return {...funFact, fact: e.target.value}
                                      } else {
                                          return funFact;
                                      }
                                  }));
                              }}
                    />
                    <br/>
                    <button className='m-2 p-2 bg-blue-600 rounded-md' onClick={editorSave}>Save</button>
                    <button className='m-2 p-2 bg-red-600 rounded-md' onClick={editorCancel}>Cancel</button>
                </div>
            )}
        </>
    )
}